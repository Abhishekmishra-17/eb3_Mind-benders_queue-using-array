### Theory:
A queue data structure can be implemented using one dimensional array. The queue implemented using array stores only fixed number of data values. The implementation of queue data structure using array is very simple. Just define a one dimensional array of specific size and insert or delete the values into that array by using FIFO (First In First Out) principle with the help of variables 'front' and 'rear'. Initially both 'front' and 'rear' are set to -1. Whenever, we want to insert a new value into the queue, increment 'rear' value by one and then insert at that position. Whenever we want to delete a value from the queue, then delete the element which is at 'front' position and increment 'front' value by one.

<b>Queue Operations using Array</b><br>
**Queue data structure using array can be implemented as follows...**

**Before we implement actual operations, first follow the below steps to create an empty queue.**
Step 1 - Include all the header files which are used in the program and define a constant 'SIZE' with specific value.<br>
Step 2 - Declare all the user defined functions which are used in queue implementation.<br>
Step 3 - Create a one dimensional array with above defined SIZE (int queue[SIZE])<br>
Step 4 - Define two integer variables 'front' and 'rear' and initialize both with '-1'. (int front = -1, rear = -1)<br>
Step 5 - Then implement main method by displaying menu of operations list and make suitable function calls to perform operation selected by the user on queue.<br>

<b>enQueue(value) :</b> Inserting value into the queue<br>
In a queue data structure, enQueue() is a function used to insert a new element into the queue. In a queue, the new element is always inserted at rear position. The enQueue() function takes one integer value as a parameter and inserts that value into the queue. We can use the following steps to insert an element into the queue...<br>
Step 1 - Check whether queue is FULL. (rear == SIZE-1)<br>
Step 2 - If it is FULL, then display "Queue is FULL!!! Insertion is not possible!!!" and terminate the function.<br>
Step 3 - If it is NOT FULL, then increment rear value by one (rear++) and set queue[rear] = value.<br>

<b>deQueue() :</b> Deleting a value from the Queue<br>
In a queue data structure, deQueue() is a function used to delete an element from the queue. In a queue, the element is always deleted from front position. The deQueue() function does not take any value as parameter. We can use the following steps to delete an element from the queue...<br>
Step 1 - Check whether queue is EMPTY. (front == rear)<br>
Step 2 - If it is EMPTY, then display "Queue is EMPTY!!! Deletion is not possible!!!" and terminate the function.<br>
Step 3 - If it is NOT EMPTY, then increment the front value by one (front ++). Then display queue[front] as deleted element. Then check whether both front and rear are equal (front == rear), if it TRUE, then set both front and rear to '-1' (front = rear = -1).<br>

<b>display() :</b> Displays the elements of a Queue<br>
We can use the following steps to display the elements of a queue...<br>
Step 1 - Check whether queue is EMPTY. (front == rear)<br>
Step 2 - If it is EMPTY, then display "Queue is EMPTY!!!" and terminate the function.<br>
Step 3 - If it is NOT EMPTY, then define an integer variable 'i' and set 'i = front+1'.<br>
Step 4 - Display 'queue[i]' value and increment 'i' value by one (i++). Repeat the same until 'i' value reaches to rear (i <= rear)<br>

**Note that (-1) refers the free pointer value**
