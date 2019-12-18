//set function that replace the logo google src+srcset to hackyourfuture :D
function hijackGoogleLogo() {
  let logo = document.getElementById('hplogo'); //getid of google logo
  let parent = document.getElementById('lga'); // get parent id of img
  if (logo.alt === 'Google') {
    let newLogo = document.createElement('img'); //great another img to replace the child
    newLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg'; //give new img src
    newLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg'; //give new img srcset
    return parent.replaceChild(newLogo, logo); //replace google logo with HYF logo
  } else {
    logo.src =
      'https://www.bridgiot.co.za/wp-content/uploads/2018/12/1024x1024-no-image-available.png'; //imge for no image available
    logo.srcset =
      'https://www.bridgiot.co.za/wp-content/uploads/2018/12/1024x1024-no-image-available.png'; //imge for no image available
  }
}
hijackGoogleLogo(); // call the function
