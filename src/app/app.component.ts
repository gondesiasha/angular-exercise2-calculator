import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercise2';
  string="";
  display="";
  operator="";
  opCount=0;
  oper="";
  array=[];
  result:any;
  numClick(num){
    this.string=this.string+num;
    this.display=`${this.string}`;


  }
  operatorClick(operator)
  {
    if(this.opCount==0)
    {
      this.oper=operator;
      this.opCount=1;
      this.string=this.string+operator;
    this.display=`${this.string}`;
    }
  }
  resultClick()
  {
    this.display=`${this.string}`
    this.array=this.string.split(this.oper);
    switch(this.oper)
    {
      case "+":
        
          this.result=parseInt(this.array[0])+parseInt(this.array[1])
          break;
        
        case "-":
            
              this.result=parseInt(this.array[0])-parseInt(this.array[1])
              break;
            
            case "X":
                
                  this.result=parseInt(this.array[0])*parseInt(this.array[1])
                  break;
                
                case "/":
                    
                      this.result=parseInt(this.array[0])/parseInt(this.array[1])
                      break;
                    
    }

  }
  clearClick(){
    this.string="";
  this.display="";
  this.operator="";
  this.opCount=0;
  this.oper="";
  this.array=[];
  this.result=undefined;
  }

}
