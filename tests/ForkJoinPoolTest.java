import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveAction;
import java.util.concurrent.atomic.AtomicInteger;

public class ForkJoinPoolTest {

    // A static variable to store the accumulated result.
    // In a real-world scenario, thread-safe mechanisms like AtomicInteger or
    // careful handling of results from joined tasks would be used for shared state.
    public static AtomicInteger result = new AtomicInteger();

    public static void main(String[] args) {
        // Create a ForkJoinPool. Using the no-argument constructor creates a pool
        // with parallelism equal to the number of available processors.
        ForkJoinPool forkJoinPool = new ForkJoinPool();

        // The array whose elements will be doubled.
        int[] array = {1, 5, 10, 15, 20, 25, 50};

        // Create a task representing the entire work.
        DoubleNumber doubleNumberTask = new DoubleNumber(array, 0, array.length);

        // Invoke the task in the ForkJoinPool. This method blocks until the task completes.
        forkJoinPool.invoke(doubleNumberTask);

        // Print the final accumulated result.
        System.out.println("Final result after doubling and summing: " + result);

        // It's good practice to shut down the pool, although for daemon threads,
        // it might not be strictly necessary for program exit.
        forkJoinPool.shutdown();
    }
}

// A RecursiveAction subclass to perform the doubling and summing.
class DoubleNumber extends RecursiveAction {

    // Threshold for processing directly instead of forking.
    // If the sub-array size is less than or equal to this, process directly.
    private static final int PROCESS_THRESHOLD = 2;

    private int[] array;
    private int startIndex, endIndex;

    DoubleNumber(int[] array, int startIndex, int endIndex) {
        this.array = array;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }

    @Override
    protected void compute() {
        // If the sub-array size is within the threshold, process directly.
        if (endIndex - startIndex <= PROCESS_THRESHOLD) {
            for (int i = startIndex; i < endIndex; i++) {
                // Accumulate the doubled value.
                // Note: In a true concurrent scenario with shared 'result',
                // synchronization or atomic operations would be needed.
                ForkJoinPoolTest.result.addAndGet(array[i] * 2);
            }
        } else {
            // Otherwise, split the task into two subtasks.
            int mid = (startIndex + endIndex) / 2;

            DoubleNumber leftArray = new DoubleNumber(array, startIndex, mid);
            DoubleNumber rightArray = new DoubleNumber(array, mid, endIndex);

            // Fork the left subtask for asynchronous execution.
            leftArray.fork();
            // Compute the right subtask directly in the current thread (or fork it as well).
            rightArray.compute();

            // Join the result of the left subtask, waiting for its completion if necessary.
            leftArray.join();
        }
    }
}