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
    public static int[] array0 = {1, 5, 10, 15, 20, 25, 50};
    public static int[] array1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100};
    public static int[] array = null;
    public static int arraySum;
    
    public static ForkJoinPool forkJoinPool;

    public static int RESULTS_ARRAY_SIZE = 1024;
    public static AtomicInteger[] results = new AtomicInteger[RESULTS_ARRAY_SIZE];

    // private data per user
    // DoubleNumber doubleNumberTask;

    public ForkJoinPoolUser(int userId, int threadId) {
        super(userId, threadId);
    }

    public boolean onStart() {
        // Initialize the shared ForkJoinPool object
        if (getUserId() == 0) {
            int id = Integer.parseInt(getUserParamValue("id"));
            logger().info("ForkJoinPoolUser.onStart: " + id);
            if (id == 0) {
                array = array0;
                arraySum = 252;
                DoubleNumber.PROCESS_THRESHOLD = 2;
            } else if (id == 1) {
                array = array1;
                arraySum = 10100;
                DoubleNumber.PROCESS_THRESHOLD = 50;
            }
            forkJoinPool = new ForkJoinPool();
        }
        // doubleNumberTask = new DoubleNumber(array, 0, array.length, getUserId());
        return true;
    }

    public boolean action1() {
        // userIds are unique and starts at 0
        int idx = getUserId();

        // ...
        results[idx].set(0);

        // Create a task representing the entire work.
        DoubleNumber doubleNumberTask = new DoubleNumber(array, 0, array.length, idx);

        // Invoke the task in the ForkJoinPool. This method blocks until the task completes.
        forkJoinPool.invoke(doubleNumberTask);

        // Print the final accumulated result.
        // System.out.println("[" + idx + "] Final result after doubling and summing: " + results[idx]);
        if (results[idx].intValue() != arraySum) {
            if (idx == 0) {
                logger().info("" + results[idx].intValue());
            }
            return false;
        }
        return true;
    }

    public boolean onStop() {
        // Shutdown the shared ForkJoinPool object
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
    public static int PROCESS_THRESHOLD = -1;

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
                ForkJoinPoolUser.results[arrayOffset].addAndGet(array[i]*2);
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
