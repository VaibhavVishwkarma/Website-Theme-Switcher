const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'gray') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'red') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }

//   });
// });

buttons.forEach( (button)=>{

button.addEventListener('click', (e)=>{
    if(e.target.id === 'gray')
      {
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'red')
        {
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue')
          {
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id === 'yellow')
            {
              body.style.backgroundColor = e.target.id;
            }
  })
})
