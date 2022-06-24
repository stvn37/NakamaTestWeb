import prisma from "../../prisma/client"

export default async function handler(req, res) {
  if(req.method == 'POST') {
    const {firstName, lastName, email, subject, message} = req.body

  console.log(firstName, lastName, email, subject, message)
  await prisma.feedback.create({
    data:{
      firstName, lastName, email, subject, message
    }

  })
  return res.status(201).json({message:"Reservation Successful"})

} else {
  return res.status(405).json({message:"Method not allowed"})
}
  
  
}
