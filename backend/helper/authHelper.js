
import bcrypt from 'bcrypt'


export const hashedPassowrd=async(password)=>{
try {
  let saltRound=10;
  let newpasswod= await bcrypt.hash(password,saltRound);

  return newpasswod;
} catch (error) {
  console.log(error);
}
}

export const checkPassword=(pass,encPass)=>{
  try {
    let flag=bcrypt.compare(pass,encPass);
return flag;
  } catch (error) {
    console.log(error)
  }

}