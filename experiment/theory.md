### Theory:
A queue data structure can be implemented using one dimensional array. The queue implemented using array stores only fixed number of data values. The implementation of queue data structure using array is very simple. Just define a one dimensional array of specific size and insert or delete the values into that array by using FIFO (First In First Out) principle with the help of variables 'front' and 'rear'. Initially both 'front' and 'rear' are set to -1. Whenever, we want to insert a new value into the queue, increment 'rear' value by one and then insert at that position. Whenever we want to delete a value from the queue, then delete the element which is at 'front' position and increment 'front' value by one.

<b>Queue Operations using Array</b><br>
**Queue data structure using array can be implemented as follows...**

**Before we implement actual operations, first follow the below steps to create an empty queue.**
     Step 1: Start<br>
     Step 2: Declare global variable array_size, front and rear<br>
     Step 3: Display enter array size<br>
     Step 4: Read variable array_size<br>
     Step 5: Declare global array queue of size array_size<br>
     Step 6: Initialize variable<br>
                      &nbsp;&nbsp;&nbsp;front <- -1<br>
                      &nbsp;&nbsp;&nbsp;rear <- -1<br>
     Step 7: End<br>
     
<b>enQueue(value) :</b> Inserting value into the queue<br>
In a queue data structure, enQueue() is a function used to insert a new element into the queue. In a queue, the new element is always inserted at rear position. The enQueue() function takes one integer value as a parameter and inserts that value into the queue. We can use the following steps to insert an element into the queue...<br>
 Step 1: Start<br>
     Step 2: If rear equals array_size - 1<br>
                      Display Queue is full<br>
                   Else<br>
                      Declare variable data<br>
                      Display enter value<br>
                      Read variable data<br>
                      Initialize variable<br>
                           rear <- rear + 1<br>
                           queue[rear] <- data<br>
                      If front equals -1<br>
                           Set front <- front + 1<br>
     Step 3: End<br>
     
<b>deQueue() :</b> Deleting a value from the Queue<br>
In a queue data structure, deQueue() is a function used to delete an element from the queue. In a queue, the element is always deleted from front position. The deQueue() function does not take any value as parameter. We can use the following steps to delete an element from the queue...<br>
     Step 1: Start<br>
     Step 2: If front equals -1<br>
                      2.1:  Display Queue is empty<br>
                   Else<br>
                      2.2: queue[front] <- free<br>&nbsp;&nbsp;
                      2.3: Declare variable i<br>
                      2.4: Initialize variable<br>
                                  i <- 0<br>
                      2.5: Repeat the step until i less then rear<br>
                                  Initialize variable<br>
                                        queue[i] <- queue[i + 1]<br>
                                        i <- i + 1<br>
                      If front equals rear<br>
                           2.6: Initialize variable<br>
                                  front <- - 1<br>
                                  rear <- - 1<br>
                      Else<br>
                           2.6: Initialize variable<br>
                                  rear <- rear - 1<br>
     Step 3: End<br>
     
<b>display() :</b> Displays the elements of a Queue<br>
We can use the following steps to display the elements of a queue...<br>
 Step 1: Start<br>
     Step 2: If front not equals -1<br>
                      2.1: Declare variable i<br>
                             Initialize variable<br>
                                  i <- front<br>
                      2.2: Repeat the step until i  less then or equals rear<br>
                             Display value at i is queue[i]<br>
                             Initialize variable<br>
                                  i <- i + 1<br>
                   Else<br>
                      Display Queue is empty<br>
     Step 3: End<br>
     
<b>isEmpty() :</b>To Check either Queue is empty or not<br>
  Step 1: Start<br>
     Step 2: If front equals -1<br>
                      Display Queue is empty<br>
                   Else<br>
                      Display Queue is not empty<br>
     Step 3: End<br>
     
<b>isFull() :</b>To Check either Queue is full or not<br>
  Step 1: Start<br>
     Step 2: If rear equals size - 1<br>
                      Display Queue is full<br>
                   Else<br>
                      Display Queue is not full<br>
     Step 3: End<br>
**Note that (-1) refers the free pointer value**
