import prisma from "../../prisma/client"

export default async function handler(req, res) {
  if(req.method == 'POST') {
    
    let uniqueid = 0;
    let exist = null
    do {
        uniqueid = Math.floor(100000 + Math.random() * 900000);
        exist = await prisma.order.findMany({
            where:{
                uniqueid,
                finish:false
            }
        })
        console.log(exist)
    }
    while (exist.length != 0 && exist != null)
    

  await prisma.order.create({
    data:{
        uniqueid,
        finish:false
      
    }

  })
  return res.status(201).json({message:"Unique ID Created.", uniqueid})

} else {
  return res.status(405).json({message:"Method not allowed"})
}
  
  
}
