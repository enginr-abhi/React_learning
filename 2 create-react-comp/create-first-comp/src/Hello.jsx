function Hello(){
  // let myName = 'Abhishek';
  let number = 456;
  let fullName = ()=>{
    return 'Abhishek kumar thakur'
  }
  return <p>MessageNo:{number} I am your master {fullName()}</p>
}
export default Hello;