let target = document.querySelector('#target');

let model = document.querySelector('.main');

let close = document.querySelector('.close');

//add

target.addEventListener('click',function(){
  openModel();
});


//close
close.addEventListener('click',function(){
  closeModel();
  });

  model.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModel();
  });


  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closeModel();
    }
  })

//function Open
  function openModel(){
    model.classList.add('active');
  }
//function Close
  function closeModel(){
    model.classList.remove('active');
  }
