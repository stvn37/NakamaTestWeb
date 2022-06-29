import prisma from "../../prisma/client"

export default async function handler(req, res) {
  if(req.method == 'POST') {

    const {uniqueid} = req.body

    const order = await prisma.order.findFirst({
        where:{
          uniqueid:parseInt (uniqueid),
          finish:false
        }
      })

      if (order) {
        return res.status(200).json({message:"Order ID Available.", found:true, id:order.id})
      }

      else {
        return res.status(200).json({message:"Order ID Unknown.", found:false, id:null})
      }
    
    
    

  

  
  

} else {
  return res.status(405).json({message:"Method not allowed"})
}
  
  
}
