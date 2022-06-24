import prisma from "../../prisma/client"

export default async function handler(req, res) {
  if(req.method == 'POST') {
    const {firstName, lastName, email, phoneNum, dateTime, persons} = req.body

  console.log(firstName, lastName, email, phoneNum, dateTime, persons)
  await prisma.reservation.create({
    data:{
      firstName, lastName, email, phoneNum, dateTime: new Date (dateTime), persons: parseInt(persons)
    }

  })
  return res.status(201).json({message:"Reservation Successful"})

} else {
  return res.status(405).json({message:"Method not allowed"})
}
  
  
}
