var weight = [35,38,42,45,43,34,36,41,48,32];
function weigh()
{
  var sum = 0 
  for(var kep = 0;kep<weight.length;kep=kep+1)
  {
    sum=sum+weight[kep]
  }
  var avg=sum/weight.length
  console.log(avg)
}

function setup() {
  createCanvas(400,400);
 weigh()
}

function draw() 
{
  background(30);
}

 

