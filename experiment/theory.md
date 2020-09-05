### Theory:
A queue data structure can be implemented using one dimensional array. The queue implemented using array stores only fixed number of data values. The implementation of queue data structure using array is very simple. Just define a one dimensional array of specific size and insert or delete the values into that array by using FIFO (First In First Out) principle with the help of variables 'front' and 'rear'. Initially both 'front' and 'rear' are set to -1. Whenever, we want to insert a new value into the queue, increment 'rear' value by one and then insert at that position. Whenever we want to delete a value from the queue, then delete the element which is at 'front' position and increment 'front' value by one.

<b>Queue Operations using Array</b><br>
**Queue data structure using array can be implemented as follows...**

**Before we implement actual operations, first follow the below steps to create an empty queue.**

     Step 1: Start
     Step 2: Declare global variable array_size, front and rear
     Step 3: Display enter array size
     Step 4: Read variable array_size
     Step 5: Declare global array queue of size array_size
     Step 6: Initialize variable
                      front <- -1
                      rear <- -1
     Step 7: End
     
<b>enQueue(value) :</b> Inserting value into the queue<br>
In a queue data structure, enQueue() is a function used to insert a new element into the queue. In a queue, the new element is always inserted at rear position. The enQueue() function takes one integer value as a parameter and inserts that value into the queue. We can use the following steps to insert an element into the queue...<br>

     Step 1: Start
     Step 2: If rear equals array_size - 1
                      &nbsp;&nbsp;Display Queue is full
                   Else
                      Declare variable data
                      Display enter value
                      Read variable data
                      Initialize variable
                           rear <- rear + 1
                           queue[rear] <- data
                      If front equals -1
                           Set front <- front + 1
     Step 3: End
     
<b>deQueue() :</b> Deleting a value from the Queue<br>
In a queue data structure, deQueue() is a function used to delete an element from the queue. In a queue, the element is always deleted from front position. The deQueue() function does not take any value as parameter. We can use the following steps to delete an element from the queue...<br>

     Step 1: Start
     Step 2: If front equals -1
                      2.1:  Display Queue is empty
                   Else
                      2.2: queue[front] <- free
                      2.3: Declare variable i
                      2.4: Initialize variable
                                  i <- 0
                      2.5: Repeat the step until i less then rear
                                  Initialize variable
                                        queue[i] <- queue[i + 1]
                                        i <- i + 1
                      If front equals rear
                           2.6: Initialize variable
                                  front <- - 1
                                  rear <- - 1
                      Else
                           2.6: Initialize variable
                                  rear <- rear - 1
     Step 3: End
     
<b>display() :</b> Displays the elements of a Queue<br>
We can use the following steps to display the elements of a queue...<br>

     Step 1: Start
     Step 2: If front not equals -1
                      2.1: Declare variable i
                             Initialize variable
                                  i <- front
                      2.2: Repeat the step until i  less then or equals rear
                             Display value at i is queue[i]
                             Initialize variable
                                  i <- i + 1
                   Else
                      Display Queue is empty
     Step 3: End
 
<b>isEmpty() :</b>To Check either Queue is empty or not<br>

     Step 1: Start
     Step 2: If front equals -1
                      Display Queue is empty
                   Else
                      Display Queue is not empty
     Step 3: End
     
<b>isFull() :</b>To Check either Queue is full or not<br>
     
     Step 1: Start
     Step 2: If rear equals size - 1
                      Display Queue is full
                   Else
                      Display Queue is not full
     Step 3: End
**Note that (-1) refers the free pointer value**
