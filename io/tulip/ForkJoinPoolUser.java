package io.tulip;

import io.github.wfouche.tulip.api.TulipUser;
import java.util.concurrent.ThreadLocalRandom;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveAction;
import java.util.concurrent.atomic.AtomicInteger;

public class ForkJoinPoolUser extends TulipUser {

    // shared data among all users
    public static int[] array = {1, 5, 10, 15, 20, 25, 50};

    public static ForkJoinPool forkJoinPool;

    public static int RESULTS_ARRAY_SIZE = 1024;
    public static AtomicInteger[] results = new AtomicInteger[RESULTS_ARRAY_SIZE];

    // private data per user
    DoubleNumber doubleNumberTask;

    public ForkJoinPoolUser(int userId, int threadId) {
        super(userId, threadId);
    }

    public boolean onStart() {
        // Initialize the shared ForkJoinPool object
        if (getUserId() == 0) {
            logger.info("ForkJoinPoolUser.onStart");
            forkJoinPool = new ForkJoinPool();
        }
        doubleNumberTask = new DoubleNumber(array, 0, array.length, getUserId());
        return true;
    }

    public boolean action1() {
        // userIds are unique and starts at 0
        int idx = getUserId();

        // ...
        results[idx].set(0);

        // Create a task representing the entire work.
        // DoubleNumber doubleNumberTask = new DoubleNumber(array, 0, array.length, idx);

        // Invoke the task in the ForkJoinPool. This method blocks until the task completes.
        forkJoinPool.invoke(doubleNumberTask);

        // Print the final accumulated result.
        // System.out.println("[" + idx + "] Final result after doubling and summing: " + results[idx]);
        if (results[idx].intValue() != 252) {
            return false;
        }
        return true;
    }

    public boolean onStop() {
        // Initialize the shared ForkJoinPool object
        if (getUserId() == 0) {
            logger.info("ForkJoinPoolUser.onStop");
            forkJoinPool.shutdown();
        }
        return true;
    }

    public Logger logger() {
        return logger;
    }

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(ForkJoinPoolUser.class);

    static {
        for (int i = 0; i != RESULTS_ARRAY_SIZE; i++) {
            results[i] = new AtomicInteger();
        }
    }

}

// A RecursiveAction subclass to perform the doubling and summing.
class DoubleNumber extends RecursiveAction {

    // Threshold for processing directly instead of forking.
    // If the sub-array size is less than or equal to this, process directly.
    private static final int PROCESS_THRESHOLD = 2;

    private int[] array;
    private int startIndex, endIndex;
    private int arrayOffset;

    DoubleNumber(int[] array, int startIndex, int endIndex, int arrayOffset) {
        this.array = array;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.arrayOffset = arrayOffset;
    }

    @Override
    protected void compute() {
        // If the sub-array size is within the threshold, process directly.
        if (endIndex - startIndex <= PROCESS_THRESHOLD) {
            for (int i = startIndex; i < endIndex; i++) {
                // Accumulate the doubled value.
                // Note: In a true concurrent scenario with shared 'result',
                // synchronization or atomic operations would be needed.
                ForkJoinPoolUser.results[arrayOffset].addAndGet(array[i] * 2);
            }
        } else {
            // Otherwise, split the task into two subtasks.
            int mid = (startIndex + endIndex) / 2;

            DoubleNumber leftArray = new DoubleNumber(array, startIndex, mid, arrayOffset);
            DoubleNumber rightArray = new DoubleNumber(array, mid, endIndex, arrayOffset);

            // Fork the left subtask for asynchronous execution.
            leftArray.fork();
            // Compute the right subtask directly in the current thread (or fork it as well).
            rightArray.compute();

            // Join the result of the left subtask, waiting for its completion if necessary.
            leftArray.join();
        }
    }
}