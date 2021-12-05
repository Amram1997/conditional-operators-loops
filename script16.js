
function sign(x,y,z){
if (x>0 && y>0 && z>0)
{
     return"The sign is +";
}
else if (x<0 && y<0 && z<0)
      {
        return "The sign is +"
      }
      else if (x>0 && y<0 && z<0)
      {
        return "The sign is +";
      }
      else if (x<0 && y>0 && z<0)
      {
        return "The sign is +";
      }
      else
      {
        return "The sign is -";
      }
    }
    console.log(sign(4, 19, -2))
   