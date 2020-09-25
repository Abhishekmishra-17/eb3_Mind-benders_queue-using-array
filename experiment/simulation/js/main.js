function main(){
    
    let loaderio = document.querySelector('.preloader');
    loaderio.parentNode.removeChild(loaderio);
   
    
    var algo = {
        variableName: ['array_size', 'front', 'rear', 'i', 'queue', 'data', 'queue[rear]',
                      'queue[i]'],
        colorCode: [{key:'Main', color:'grey'},
                    {key:'enQueue', color:'grey'},
                    {key:'deQueue', color:'grey'},
                    {key:'isFull', color:'grey'},
                    {key:'isEmpty', color:'grey'},
                    {key:'display', color:'grey'},
                    {key:'Step', color:'green'},
                    {key:'Start', color:'blue'},
                    {key:'End', color:'blue'},
                    {key:'Declare', color:'blue'},
                    {key:'Display', color:'blue'},
                    {key:'Read', color:'blue'},
                    {key:'Initialize', color:'blue'},
                    {key:'If', color:'blue'},
                    {key:'Else', color:'blue'},
                    {key:'and', color:'blue'},
                    {key:'global', color:'purple'},
                    {key:'variable', color:'purple'},
                    {key:'array', color:'purple'},
                    {key:'equals', color:'skyblue'},
                    {key:'equals', color:'blue'},
                    {key:'<-', color:'grey'}],
        text: `Main
          {5} Step 1: Start
          {5} Step 2: Declare global variable array_size, front and rear
          {5} Step 3: Display enter array size
          {5} Step 4: Read variable array_size
          {5} Step 5: Declare global array queue of size array_size
          {5} Step 6: Initialize variable
                            {22} front <- -1
                            {22} rear <- -1
          {5} Step 7: End

        enQueue
           {5} Step 1: Start
           {5} Step 2: If rear equals array_size - 1
                      {22} Display Queue is full
                   {19} Else
                      {22} Declare variable data
                      {22} Display enter value
                      {22} Read variable data
                      {22} Initialize variable
                        {27} rear <- rear + 1
                        {27} queue[rear] <- data
                      {22} If front equals -1
                      {27} Set front <- front + 1
           {5} Step 3: End

        deQueue
           {5} Step 1: Start
           {5} Step 2: If front equals -1
                      {22} 2.1:  Display Queue is empty
                   {19} Else
                      {22} 2.2: queue[front] <- free
                      {22} 2.3: Declare variable i
                      {22} 2.4: Initialize variable
                           {34} i <- 0
                      {22} 2.5: Repeat the step until i less then rear
                           {34} Initialize variable
                            {39}  queue[i] <- queue[i + 1] 
                            {39}  i <- i + 1 
                      {22} If front equals rear
                      {27} 2.6: Initialize variable
                                {34} front <- - 1
                                {34} rear <- - 1
                      {22} Else
                      {27} 2.6: Initialize variable
                                {34} rear <- rear - 1
          {5} Step 3: End

        isFull 
           {5} Step 1: Start
           {5} Step 2: If rear equals size - 1 
                      {22} Display Queue is full
                   {19} Else
                      {22} Display Queue is not full
           {5} Step 3: End

        isEmpty
           {5} Step 1: Start
           {5} Step 2: If front equals -1
                     {22} Display Queue is empty
                   {19} Else
                      {22} Display Queue is not empty
           {5} Step 3: End

        display 
           {5} Step 1: Start
           {5} Step 2: If front not equals -1
                     {22} 2.1: Declare variable i 
                     {29} Initialize variable
                            {34} i <- front
                     {22} 2.2: Repeat the step until i  less then or equals rear
                          {29} Display value at i is queue[i]
                          {29} Initialize variable
                            {34} i <- i + 1
                     {19} Else
                         {22} Display Queue is empty           
          {5} Step 3: End`,
        lines: 0,

        codeFormater: function(){
            let _this = this;
            let codeTxt = this.text.split('\n');
            let currentLine = 0;
            codeTxt.forEach(function(item, index){
                currentLine++;
                let line = item.trim().split(' ');
                let div = document.createElement('div');
                let previousKey = '';
                let string = false;
                div.classList.add('code-line-text');
                line.forEach(function(item, index){

                  let space = item.match(/\{[0-9]+\}/);
                  if(space != null){
                      space = '&nbsp;'.repeat(parseInt(item.slice(1, space[0].length-1)));
                      let span_ = document.createElement('span');
                      span_.innerHTML = space;
                      div.appendChild(span_);
                  }
                  else{
                  let span = document.createElement('span');
                  if(previousKey == 'Step' && item.search(/[0-9]:/) >= 0){
                      span.classList.add('color-green');
                  }
                  else if(string && _this.variableName.indexOf(item) < 0){
                      span.classList.add('color-yellow');
                  }
                  else{
                      span.classList.add('color-' + _this.findColor(item));
                  }
                  let text = item;
                  previousKey = text;
                  text == 'Display' ? string = true : ''; 
                  span.textContent = text;
                  index != line.length - 1 ? span.innerHTML += '&nbsp;' : '';

                  div.appendChild(span);    
                  }


                });
                document.querySelector('.code-text').appendChild(div);
            });
            this.lines = currentLine + 5;
        },

        rowFormater: function(){
            for(let x = 1; x <= this.lines; x++){
                let div1 = document.createElement('div');
                div1.classList.add('line-no');
                let span1 = document.createElement('span');
                span1.classList.add('current');
                let span2 = document.createElement('span');
                span2.classList.add('row-no');
                span2.textContent = x;
                div1.appendChild(span1);
                div1.appendChild(span2);
                document.querySelector('.editor .line').appendChild(div1);
            }
        },
        findColor: function(key){
            let color = 'blue';
            this.colorCode.forEach(function(item, index){
                if(item['key'] == key){
                    color = item['color'];
                }

            });
            if(color == 'blue'){

                if(this.variableName.indexOf(key.replace(',', '')) >=0){
                    color = 'blue';
                }
                if(color == 'blue' && key.search(/(\-|\+)*[0-9]+/g) >= 0){

                    color = 'skyblue';
                }
                if(color == 'blue' && key.search(/(\+|\-)+/g) >= 0){
                    color = 'grey';
                }
            }
            return color;
        }
    }
    algo.codeFormater();
    algo.rowFormater();

    let editorDiv = document.querySelector('.editor');

    function gotoLine(line, duration, callback = null, skip = false){
        setTimeout(function(){
            let lineDiv = document.querySelectorAll('.editor .code-line-text');
            let lineNoDiv = document.querySelectorAll('.editor .line-no');

            for(let x = 0; x < lineDiv.length; x++){
                lineDiv[x].classList.remove('active');
                lineDiv[x].classList.remove('skip');
            }
            for(let x = 0; x < lineNoDiv.length; x++){
                lineNoDiv[x].childNodes[0].classList.remove('active');
                lineNoDiv[x].childNodes[0].classList.remove('skip');
            }
            if(line != 0){

                    lineDiv[line - 1].classList.add('active');
                    if(skip){
                        lineDiv[line - 1].classList.add('skip');
                    }
                    lineNoDiv[line - 1].childNodes[0].classList.add('active');
                    if(skip){
                        lineNoDiv[line - 1].childNodes[0].classList.add('skip');
                    }

                    let codeDiv = document.querySelector('.code-text').offsetTop;
                    let rowDiv = lineDiv[line - 1].offsetTop;

                    if((rowDiv - codeDiv + 13) > editorDiv.scrollTop && 
                        (rowDiv - codeDiv + 13) < editorDiv.scrollTop + 500){
                        //console.log('visible', (rowDiv - codeDiv + 13) , editorDiv.scrollTop);
                    }
                    else{
                        //console.log((rowDiv - codeDiv + 13) , editorDiv.scrollTop);
                        editorDiv.scroll(0, (rowDiv - codeDiv + 13) - 5);
                    }

                    if(callback){
                        callback();
                    }

            }else{
                if(callback){
                        callback();
                    }
            }
        }, duration);

    }
    /******************************** queue ***************************************/
    let terminal = document.querySelector('.commands-line');
    let enQueueelm = document.querySelector('.operations .enqueue-function');
    let deQueueelm = document.querySelector('.operations .dequeue-function');
    let isFull = document.querySelector('.operations .isfull-function');
    let isEmpty = document.querySelector('.operations .isempty-function');
    let display = document.querySelector('.operations .display-function');
    
    var questionDone = [];
    
    let program = true;
    let started = false;
    var queue = {
        size: 0,
        front: -1,
        rear: -1,
        enQueue: function(_this, e){
          let globalThis = this;
          gotoLine(12, 1000);  
          gotoLine(13, 2000);  
          gotoLine(14, 3000);
          if(queue.rear == queue.size - 1){
              gotoLine(15, 4000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is full ';
                    
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                  
                    scrollTerminal();
              });
              gotoLine(16, 5000, function(){}, true);
              gotoLine(17, 6000, function(){}, true);
              gotoLine(18, 7000, function(){}, true);
              gotoLine(19, 8000, function(){}, true);
              gotoLine(20, 9000, function(){}, true);
              gotoLine(21, 10000, function(){}, true);
              gotoLine(22, 11000, function(){}, true);
              gotoLine(23, 12000, function(){}, true);
              gotoLine(24, 13000, function(){}, true);
              gotoLine(25, 14000);
              gotoLine(0, 15000, start_);
              setTimeout(function(){
                  if(!questionDone.includes(1)){
                  questionDone.push(1);
                  askme(1);
                  }
              }, 15500);
          }else{
              gotoLine(15, 4000, function(){}, true);
              gotoLine(16, 5000);
              gotoLine(17, 6000, function(){
                  createVariable('data', '', '5804', 'free');        
              });
              gotoLine(18, 7000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' enter value ';
                    
                    let input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.classList.add('getCommand');
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    div1.appendChild(input);
                    terminal.appendChild(div1);
                    document.querySelector('.getCommand').blur();
                    
                    scrollTerminal();
              });
              gotoLine(19, 8000, function(){
                  let getCommand = document.querySelector('.getCommand');
                  getCommand.focus();
                  getCommand.addEventListener('input', function(e){
                     if(this.value.length > 0 && this.value.length < 3){ }
                      else{
                        this.value = '';
                      } 
                  });
                  getCommand.addEventListener('keypress', function(e){
                     if(this.value.length > 0 && this.value.length < 3){
                           if(e != undefined && e.keyCode == 13){
                                this.blur();
                                let span = this.previousSibling;
                                let data  = this.value; 
                                span.textContent = span.textContent + ' ' + data;
                                document.querySelector('.memory .data').classList.remove('free');
                                document.querySelector('.memory .data').classList.add('used');
                                document.querySelector('.memory .data .vvalue > span').textContent = data;
                                this.parentNode.removeChild(this);
                                gotoLine(20, 1000);
                                gotoLine(21, 2000, function(){
                                     let array = document.querySelectorAll('.array-graphical .byte');
                                     let index = document.querySelectorAll('.index-no .number');
                                     document.querySelector('.memory .rear .vvalue > span').textContent = queue.rear + 1;
                                     array[globalThis.rear + 1].classList.remove('active');
                                     //document.querySelector('.array-pointer .symbol .rear').classList.remove('active');

                                    let pointersR = document.querySelector('.array-pointer .pointer.rear');
                                    if(globalThis.rear < globalThis.size - 1){
                                        if(globalThis.rear < 0){
                                            pointersR.classList.add('move_01');
                                        }else{
                                            pointersR.classList.add('move_' + (globalThis.rear + 2));
                                        }
                                        if(globalThis.front != -1){
                                        document.querySelector('.array-pointer .pointer.front').classList.add('move_01');
                                        }
                                        setTimeout(function(){
                                          array[globalThis.rear].classList.add('active');
                                          setTimeout(function(){
                                              array[globalThis.rear].classList.remove('active');
                                          }, 1000)
                                        }, 500);
                                    }else{

                                        pointersR.classList.add('move_' + globalThis.size);
                                    }
                                    if(globalThis.front = -1){
                                        index[0].classList.remove('active');
                                    }
                                    if(globalThis.rear > 0){
                                        index[globalThis.rear + 1].classList.remove('active');
                                        }
                                    index[globalThis.rear + 2].classList.add('active');
                                    queue.rear += 1;
                                    
                                    let previousFront = 0;
                                    
                                    if(globalThis.front < 0){
                                        previousFront = globalThis.front;
                                         globalThis.front = 0;
                                         
                                         document.querySelector('.memory .front .vvalue > span').textContent = '0';
                                    }
                                    
                                    
                                    
                                    gotoLine(22, 1000, function(){
                                        document.querySelector('.memory .queue').classList.remove('free');
                                        document.querySelector('.memory .queue').classList.add('used');

                                       
                                        array[queue.rear].textContent = data;
                                        array[queue.rear].classList.remove('free');
                                        array[queue.rear].classList.add('used');
                                        array[queue.rear].classList.add('active');
                                        document.querySelector('.array-pointer .symbol .rear').classList.add('active');
                                        setTimeout(function(){
                                             document.querySelector('.array-pointer .symbol .rear').classList.remove('active');
                                        }, 500);
                                        
                                        
                                    });
                                    gotoLine(23, 2000);
                                    if(previousFront == -1){
                                        gotoLine(24, 3000, function(){
                                            document.querySelector('.array-pointer .pointer.front').classList.add('move_01');
                                        });
                                    }else{
                                        gotoLine(24, 3000, function(){}, true);
                                    }
                                    gotoLine(25, 4000, function(){
                                        console.log(document.querySelector('.memory .data').parentNode);
                                        let data = document.querySelector('.memory .data');
                                        data.parentNode.removeChild(data);
                                    });
                                    gotoLine(0, 5000, start_);
                                    setTimeout(function(){
                                        if(!questionDone.includes(1)){
                                                    questionDone.push(1);
                                                    askme(1);
                                        }
                                      }, 5500);
                                 });
                           }
                        }
                      else{
                        this.value = '';
                      } 
                  });
              })
          }
        },
        deQueue: function(_this, e){
            let globalThis = this;
            gotoLine(27, 1000);
            gotoLine(28, 2000);
            gotoLine(29, 3000);
            
            if(this.front == -1){
                gotoLine(30, 4000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is empty ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    scrollTerminal();
                });
                gotoLine(31, 5000, function(){}, true);
                gotoLine(32, 6000, function(){}, true);
                gotoLine(33, 7000, function(){}, true);
                gotoLine(34, 8000, function(){}, true);
                gotoLine(35, 9000, function(){}, true);
                gotoLine(36, 10000, function(){}, true);
                gotoLine(37, 11000, function(){}, true);
                gotoLine(38, 12000, function(){}, true);
                gotoLine(39, 13000, function(){}, true);
                gotoLine(40, 14000, function(){}, true);
                gotoLine(41, 15000, function(){}, true);
                gotoLine(42, 16000, function(){}, true);
                gotoLine(43, 17000, function(){}, true);
                gotoLine(44, 18000, function(){}, true);
                gotoLine(45, 19000, function(){}, true);
                gotoLine(46, 20000, function(){}, true);
                gotoLine(47, 21000);
                gotoLine(0, 22000, start_);
                setTimeout(function(){
                if(!questionDone.includes(2)){
                  questionDone.push(2);
                  askme(2);
                }
               }, 22500);
            }else{
                gotoLine(27, 1000);
                gotoLine(28, 2000);
                gotoLine(29, 3000);
                gotoLine(30, 4000, function(){}, true);
                gotoLine(31, 5000);
                gotoLine(32, 6000, function(){
                    document.querySelector('.pointer.front .symbol > i').classList.add('active');
                    setTimeout(function(){
                         document.querySelector('.pointer.front .symbol > i').classList.remove('active');
                    }, 500);
                    document.querySelector('.array-graphical .byte').classList.remove('used');
                    document.querySelector('.array-graphical .byte').classList.add('free');
                    document.querySelector('.array-graphical .byte').textContent = 'free';
                    document.querySelector('.array-graphical .byte').classList.add('active');
                    setTimeout(function(){
                       document.querySelector('.array-graphical .byte').classList.remove('active'); 
                       }, 1000);
                    gotoLine(33, 1000, function(){
                        createVariable('i', '', '5400', 'free');
                    });
                    gotoLine(34, 2000);
                    gotoLine(35, 3000, function(){
                        
                        document.querySelector('.memory .i .vvalue > span').textContent = '0'
                        document.querySelector('.memory .i').classList.remove('free');
                        document.querySelector('.memory .i').classList.add('used');
                    });
                    gotoLine(36, 4000, function(){
                        if(globalThis.rear != 0){
                        let moveBox_symbol = document.querySelectorAll('.move-box .symbol');
                        let timecount = 1000;
                        for(let x = 0; x <= globalThis.rear - 1; x++){
                            gotoLine(37, timecount);
                            timecount += 1000;
                            gotoLine(38, timecount, function(){
                                
                                moveBox_symbol[x].classList.add('active');
                                let bytes  = document.querySelectorAll('.array-graphical .byte');
                                bytes[x].textContent = bytes[x + 1].textContent;
                                bytes[x + 1].textContent = 'free';
                                bytes[x].classList.remove('free');
                                bytes[x + 1].classList.remove('used');
                                bytes[x + 1].classList.add('free');
                                bytes[x].classList.add('used');
                                bytes[x].classList.add('active');
                                setTimeout(function(){
                                   bytes[x].classList.remove('active'); 
                                }, 500);
                                
                            });
                            timecount += 1000;
                            gotoLine(39, timecount, function(){
                                
                                 moveBox_symbol[x].classList.remove('active');
                                 document.querySelector('.memory .i .vvalue > span').textContent  = x + 1;
                            });
                            timecount += 1000;
                            
                            
                        }
                            gotoLine(40, timecount, function(){}, true);
                            timecount += 1000;
                            gotoLine(41, timecount, function(){}, true);
                            timecount += 1000;
                            gotoLine(42, timecount, function(){}, true);
                            timecount += 1000;
                            gotoLine(43, timecount, function(){}, true);
                            timecount += 1000;
                            gotoLine(44, timecount);
                            timecount += 1000;
                            gotoLine(45, timecount);
                            timecount += 1000;
                            gotoLine(46, timecount, function(){
                                let indexNo = document.querySelectorAll('.index-no .number');
                                indexNo[globalThis.rear + 1].classList.remove('active');
                                indexNo[globalThis.rear].classList.add('active');
                                document.querySelector('.array-pointer .rear').classList.remove('move_' + (globalThis.rear + 1));
                                globalThis.rear -= 1;
                                document.querySelector('.memory .rear .vvalue > span').textContent = globalThis.rear;
                            });
                            timecount += 1000;
                            gotoLine(47, timecount, function(){
                                let i = document.querySelector('.memory .i');
                                i.parentNode.removeChild(i);
                            });
                            timecount += 1000;
                            gotoLine(0, timecount, start_);
                            setTimeout(function(){
                           if(!questionDone.includes(2)){
                              questionDone.push(2);
                              askme(2);
                           }
                           }, timecount+500);
                        }else{
                            gotoLine(37, 1000, function(){}, true);
                            gotoLine(38, 2000, function(){}, true);
                            gotoLine(39, 3000, function(){}, true);
                            gotoLine(40, 4000);
                            gotoLine(41, 5000);
                            gotoLine(42, 6000, function(){
                                document.querySelector('.array-pointer .front').classList.remove('move_01');
                                document.querySelectorAll('.index-no .number')[0].classList.add('active');
                                document.querySelectorAll('.index-no .number')[1].classList.remove('active');
                                document.querySelector('.memory .front .vvalue > span').textContent = '-1';
                                globalThis.front =  -1;
                            });
                            gotoLine(43, 7000, function(){
                                document.querySelector('.memory .rear .vvalue > span').textContent = '-1';
                                document.querySelector('.array-pointer .rear').classList.remove('move_01');
                                globalThis.rear =  -1;
                            });
                            gotoLine(44, 8000, function(){}, true);
                            gotoLine(45, 9000, function(){}, true);
                            gotoLine(46, 10000, function(){}, true);
                            
                            gotoLine(47, 11000, function(){
                                let i = document.querySelector('.memory .i');
                                i.parentNode.removeChild(i);
                            });
                            gotoLine(0, 12000, start_);
                            setTimeout(function(){
                                if(!questionDone.includes(2)){
                                  questionDone.push(2);
                                  askme(2);
                                }
                               }, 12500);
                        }
                    })
                    
                });
            }
        },
        isFull: function(_this, e){
            gotoLine(49, 1000);
            gotoLine(50, 2000);
            gotoLine(51, 3000);
            if(this.rear == this.size - 1){
                gotoLine(52, 4000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is full ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    
                    scrollTerminal();
                });
                gotoLine(53, 5000, function(){}, true);
                gotoLine(54, 6000, function(){}, true);
                gotoLine(55, 7000);
                gotoLine(0, 8000, start_);
                setTimeout(function(){
                if(!questionDone.includes(3)){
                  questionDone.push(3);
                  askme(3);
                    }
               }, 8500);
            }else{
                gotoLine(52, 4000, function(){}, true);
                gotoLine(53, 5000);
                gotoLine(54, 6000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is not full ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    scrollTerminal();
                });
                gotoLine(55, 7000);
                gotoLine(0, 8000, start_);
                setTimeout(function(){
                if(!questionDone.includes(3)){
                  questionDone.push(3);
                  askme(3);
                    }
               }, 8500);
            }
        },
        isEmpty: function(_this, e){
            let globathis = this;
            gotoLine(57, 1000);
            gotoLine(58, 2000);
            gotoLine(59, 3000);
            
            if(this.front == -1){
                gotoLine(60, 4000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is empty ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    scrollTerminal();
                });
                gotoLine(61, 5000, function(){}, true);
                gotoLine(62, 6000, function(){}, true);
                
            }else{
               gotoLine(60, 4000, function(){}, true);
               gotoLine(61, 5000);
               gotoLine(62, 6000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is not empty ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    scrollTerminal();
                });
                
            }
            gotoLine(63, 7000);
            gotoLine(0, 8000,start_);
            setTimeout(function(){
                if(!questionDone.includes(4)){
                  questionDone.push(4);
                  askme(4);
                    }
               }, 8500);
        },
        dipslay: function(_this, e){
            let globalthis = this;
            gotoLine(65, 1000);
            gotoLine(66, 2000);
            gotoLine(67, 3000);
            if(this.front == -1){
                gotoLine(68, 4000, function(){}, true);
                gotoLine(69, 5000, function(){}, true);
                gotoLine(70, 6000, function(){}, true);
                gotoLine(71, 7000, function(){}, true);
                gotoLine(72, 8000, function(){}, true);
                gotoLine(73, 9000, function(){}, true);
                gotoLine(74, 10000, function(){}, true);
                gotoLine(75, 11000);
                gotoLine(76, 12000, function(){
                    let div1 = document.createElement('div');
                    div1.classList.add('code-text');
                    let p1 = document.createElement('p');
                    p1.textContent = 'command>_';
                    p1.classList.add('user');
                    let p2 = document.createElement('p');
                    p2.textContent = ' Queue is empty ';
                    div1.appendChild(p1);
                    div1.appendChild(p2);
                    terminal.appendChild(div1);
                    scrollTerminal();
                });
                gotoLine(77, 13000);
                gotoLine(0, 14000, start_);
                setTimeout(function(){
                if(!questionDone.includes(5)){
                  questionDone.push(5);
                  askme(5);
                    }
               }, 14500);
            }else{
                gotoLine(68, 4000, function(){
                    createVariable('i', '', '5838', 'free');   
                });
                gotoLine(69, 5000);
                gotoLine(70, 6000, function(){
                    document.querySelector('.memory .i .vvalue > span').textContent = '0';
                    document.querySelector('.memory .i').classList.remove('free');
                    document.querySelector('.memory .i').classList.add('used');
                });
                gotoLine(71, 7000, function(){
                    let bytes = document.querySelectorAll('.array-graphical .byte');
                    let timeout = 1000;
                    for(let x = 0; x <= globalthis.rear; x++){
                        gotoLine(72, timeout, function(){
                                let div1 = document.createElement('div');
                                div1.classList.add('code-text');
                                let p1 = document.createElement('p');
                                p1.textContent = 'command>_';
                                p1.classList.add('user');
                                let p2 = document.createElement('p');
                                p2.textContent = ' Value at ' + x + ' is ' + bytes[x].textContent;
                                div1.appendChild(p1);
                                div1.appendChild(p2);
                                terminal.appendChild(div1);
                                scrollTerminal();
                            });
                        timeout += 1000;
                        gotoLine(73, timeout);
                        timeout += 1000;
                        gotoLine(74, timeout, function(){
                            document.querySelector('.memory .i .vvalue > span').textContent = x + 1;
                        });
                        timeout += 1000;
                    }
                    
                    gotoLine(75, timeout, function(){}, true);
                    timeout += 1000;
                    gotoLine(76, timeout, function(){}, true);
                    timeout += 1000;
                    gotoLine(77, timeout, function(){
                        let i = document.querySelector('.memory .i');
                        i.parentNode.removeChild(i);
                    });
                    timeout += 1000;
                    gotoLine(0, timeout, start_);
                    setTimeout(function(){
                        if(!questionDone.includes(5)){
                          questionDone.push(5);
                          askme(5);
                            }
                    }, timeout+500);
                });
            }
        }
    }
    enQueueelm.addEventListener('click', function(e){
        if(!program){
        stop_();
        queue.enQueue(this, e);
        }
    });
    deQueueelm.addEventListener('click', function(e){
        if(!program){
        stop_();
        queue.deQueue(this, e);
        }
    });
    isFull.addEventListener('click', function(e){
        if(!program){
        stop_();
        queue.isFull(this, e);
        }
    });
    isEmpty.addEventListener('click', function(e){
        if(!program){
        stop_();
        queue.isEmpty(this, e);
        }
    });
    display.addEventListener('click', function(e){
        if(!program){
        stop_();
        queue.dipslay(this, e);
        }
    });
    /********************************  bash **************************************/
    var start = document.querySelector('header .run');
    start.addEventListener('click', function(e){
        if(!program || !started){
            started = true;
            startMain(this, e);
        }
    });

    function startMain(_this, e){
        if(_this.classList.contains('active')){
             stop_();
            _this.classList.remove('active');
            _this.childNodes[1].style.display = 'inline-block';
            _this.childNodes[3].style.display = 'none';
            _this.childNodes[5].textContent = 'Run';
            
            document.querySelector('.array-box').classList.remove('animate');
            document.querySelector('.queue-line').classList.remove('animate');
            document.querySelector('.array-pointer').classList.remove('animate');
            
            setTimeout(function(){
                document.querySelector('.array-graphical').innerHTML = '';
                document.querySelector('.move-box').innerHTML = '';
                document.querySelector('.index-no').innerHTML = '';
                document.querySelector('.memory').innerHTML = '';
                document.querySelector('.array-pointer .front').setAttribute('class','pointer front');
                document.querySelector('.array-pointer .rear').setAttribute('class','pointer rear');
                document.querySelector('.commands-line').innerHTML = '';
                _this.classList.remove('disabled');
            }, 500);
            
            
            queue.size = 0;
            queue.front = -1;
            queue.rear = -1;
            program = true;
            started = false;
            
        }else{
            _this.classList.add('disabled');
            _this.classList.add('active');
            _this.childNodes[1].style.display = 'none';
            _this.childNodes[3].style.display = 'inline-block';
            _this.childNodes[5].textContent = 'Stop';
            Main();
        }
    }

    //////////////////////// algo functions /////////////////////////////
    function start_(){
        document.querySelector('header .run').classList.remove('disabled');
        let cmd = document.querySelectorAll('.operations .cmd');
        for(let x=0; x < cmd.length; x++){
            cmd[x].classList.remove('disabled');
        }
        program = false;
    }
    function stop_(){
        program = true;
        document.querySelector('header .run').classList.add('disabled');
        let cmd = document.querySelectorAll('.operations .cmd');
        for(let x=0; x < cmd.length; x++){
            cmd[x].classList.add('disabled');
        }
    }
    
    
    
    

    function Main(){

        gotoLine(1, 1000);
        gotoLine(2, 2000);
        gotoLine(3, 3000,  function(){
            createVariable('array_size', '', '5200', 'free');
            createVariable('front', '', '5304', 'free');
            createVariable('rear', '', '5108', 'free');
        });
        gotoLine(4, 4000, function(){
            let div1 = document.createElement('div');
            div1.classList.add('code-text');
            let p1 = document.createElement('p');
            p1.textContent = 'command>_';
            p1.classList.add('user');
            let p2 = document.createElement('p');
            p2.textContent = ' enter array size ';
            scrollTerminal();
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('getCommand');
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(input);
            terminal.appendChild(div1);
        });
        gotoLine(5, 5000, function(){
           let getCommand = document.querySelector('.getCommand');
           getCommand.focus();
           getCommand.addEventListener('input', function(e){
             if(!isNaN(this.value) && parseInt(this.value) <= 10 && parseInt(this.value) >= 5){

              }
              else{
                this.value = '';
              }

           });
           getCommand.addEventListener('keypress', function(e){
               if(!isNaN(this.value) && parseInt(this.value) <= 10 && 
                     parseInt(this.value) >= 5){
                    if(e != undefined && event.keyCode == 13){
                        this.blur();
                        let span = this.previousSibling;
                        queue.size = this.value;
                        
                        
                        
                        
                        span.textContent = span.textContent + ' ' + this.value;
                        document.querySelector('.memory .array_size').classList.remove('free');
                        document.querySelector('.memory .array_size').classList.add('used');
                        document.querySelector('.memory .array_size .vvalue > span').textContent = queue.size;
                        this.parentNode.removeChild(this);
                        gotoLine(6, 0, function(){
                            let moveBox = document.querySelector('.move-box');
                            for(let x = 1; x < queue.size; x++){
                                let  div = document.createElement('div');
                                div.classList.add('symbol')
                                let  div2 = document.createElement('div');
                                div.appendChild(div2);
                                moveBox.appendChild(div);
                            }
                            
                            createVariable('queue', '[...]', '5256', 'free');
                            document.querySelector('.array-box .queue').style.width = 
                                queue.size * 60 + 'px';
                            for(let x = 0; x < queue.size; x++){
                                let div = document.createElement('div');
                                div.classList.add('byte', 'free');
                                div.textContent = 'free';
                                document.querySelector('.array-box .queue .array-graphical').appendChild(div);
                            }
                            let indexNo = document.querySelector('.array-box .index-no');
                            indexNo.style.width = (queue.size * 60 + 60) + 'px';
                            document.querySelector('.array-pointer').style.width = (queue.size * 60 + 60) + 'px';
                            for(let x = -1; x < queue.size; x++){
                                let div = document.createElement('div');
                                div.classList.add('number');
                                div.textContent = x;
                                x == -1 ? div.classList.add('active') : '';
                                indexNo.appendChild(div);
                            }
                            document.querySelector('.direction-box .queue-line').
                            classList.toggle('animate');

                            setTimeout(function(){
                            document.querySelector('.array-box').classList.toggle('animate');
                                }, 500);
                        });
                        gotoLine(7, 1000);
                        gotoLine(8, 2000, function(){
                            document.querySelector('.front').classList.remove('free');
                            document.querySelector('.front').classList.add('used');
                            document.querySelector('.front .vvalue > span').textContent = -1;
                            document.querySelector('.array-pointer').classList.toggle('animate');

                        });
                        gotoLine(9, 3000, function(){
                            document.querySelector('.rear').classList.remove('free');
                            document.querySelector('.rear').classList.add('used');
                            document.querySelector('.rear .vvalue > span').textContent = -1;
                        });
                        gotoLine(10, 4000);
                        gotoLine(0, 5000, start_);
                    }
                  }
           });


        });
    }
    
    

        function createVariable(name, value, address, type){
            let memory = document.querySelector('.memory');
            let div = document.createElement('div');
            div.classList.add('variable');
            div.classList.add(type);
            div.classList.add(name);
            let div2 = document.createElement('div');
            let span = document.createElement('span');

            span.textContent = name;
            div2.className = 'vname';
            div2.appendChild(span);
            div.appendChild(div2);

            div2 = document.createElement('div');
            span = document.createElement('span');
            span.textContent = value;
            div2.className = 'vvalue';
            div2.appendChild(span);
            div.appendChild(div2);
            memory.appendChild(div);

        }


        terminal.addEventListener('click', function(){
            let getCommand = document.querySelector('.getCommand');
            if(getCommand != null){
                getCommand.focus();
            }
        });

        document.querySelector('.reload-terminal').addEventListener('click', function(){
           document.querySelector('.commands-line').innerHTML = '';
            
        });


        function scrollTerminal(){
            let terminal = document.querySelector('.bash .command');
            terminal.scrollTop = terminal.scrollHeight;
        }

        let correct = 0;
        let options = document.querySelectorAll('.askme .checkbox input');
        
       function askme(questionNo){
            let question = document.querySelector('.askme .question > h4');
            let option_ = document.querySelectorAll('.checkbox label');
            switch (questionNo){
                case 1:
                    question.textContent = 'Q. What does the enQueue operation do?';
                    option_[0].childNodes[0].textContent = 'Insert new element.';
                    option_[1].childNodes[0].textContent = 'Delete element.';
                    option_[2].childNodes[0].textContent = 'Both Insert and Delete.';
                    option_[3].childNodes[0].textContent = 'Check if Queue is full.';
                    correct = 0;
                    break;
                case 2:
                    question.textContent = 'Q. A queue is a ?';
                    option_[0].childNodes[0].textContent = 'FIFO (First In First Out) list.';
                    option_[1].childNodes[0].textContent = 'LIFO (Last In First Out) list.';
                    option_[2].childNodes[0].textContent = 'Ordered array.';
                    option_[3].childNodes[0].textContent = 'Linear tree.';
                    correct = 0;
                    break;
                case 3:
                    question.textContent = 'Q. How to check if Queue is full?';
                    option_[0].childNodes[0].textContent = 'Rear equals Array size';
                    option_[1].childNodes[0].textContent = 'Rear equals -1';
                    option_[2].childNodes[0].textContent = 'Front equals Rear';
                    option_[3].childNodes[0].textContent = 'Rear equlas Array size - 1';
                    correct = 3;
                    break;
                case 4:
                    question.textContent = 'Q. What is Queue empty condition?';
                    option_[0].childNodes[0].textContent = 'Rear equals Front.';
                    option_[1].childNodes[0].textContent = 'Front equals -1.';
                    option_[2].childNodes[0].textContent = 'Front equals Array size - 1';
                    option_[3].childNodes[0].textContent = 'Rear equals Array size - 1';
                    correct = 1;
                    break;
                case 5:
                    question.textContent = 'Q. What is drawback of Linear Queue implementation using array?';
                    option_[0].childNodes[0].textContent = 'We can not use full space available.';
                    option_[1].childNodes[0].textContent = 'Time complexity is O(n) for deQueue operation.';
                    option_[2].childNodes[0].textContent = '(a) or (b).';
                    option_[3].childNodes[0].textContent = 'None of the above.';
                    correct = 2;
                    break;
                    
                    
            }
            document.querySelector('.askme').style.display = 'flex';
        }
        
        
        function checkAnswer(index){
            for(let x = 0; x < options.length; x++){
                if(index != x){
                    options[x].checked = false;
                    options[x].nextSibling.nextSibling.classList.remove('false')
                }
                
            }
            if(index != correct){
                    options[index].nextSibling.nextSibling.classList.add('false');
            }else{
                setTimeout(function(){
                    document.querySelector('.askme').style.display = 'none';
                    for(let x = 0; x < options.length; x++){
                            options[x].checked = false;
                            options[x].nextSibling.nextSibling.classList.remove('false')
                    }
                }, 1000);
                
                
            }
        }
        
        for(let x = 0; x < options.length; x++){
            options[x].addEventListener('change', function(){
                checkAnswer(x);
            });
        }

       document.querySelector('.simulater').addEventListener('click', function(){
           document.querySelector('.information').classList.add('animate');
       });
       document.querySelector('.theory').addEventListener('click', function(){
           document.querySelector('.information').classList.remove('animate');
       });


}
window.addEventListener('load', main);

function resolution(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var wRation = 1366;
    var hRatio = 625;
    
    var elmMain = document.querySelector('main');
    var elmBody = document.querySelector('body');
    
    if(width < wRation){
        var calc = ((elmBody.offsetWidth * 100) / wRation) / 100;
        var calcMargin = (wRation -  elmBody.offsetWidth) / 2;
        elmMain.style.transform = 'scale(' + calc + ')';
        elmMain.style.marginLeft = '-' + calcMargin + 'px';
    }else{
         elmMain.style.transform = 'scale(1)';
         elmMain.style.marginLeft = (width - 1366) / 2 + 'px';
    }
   
}
resolution();
window.onresize = resolution;