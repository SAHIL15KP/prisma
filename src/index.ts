import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function main(){
    await client.user.create({
        data:{
            username:"sahil",
            password:"2873",
            age:21,
            city:"chandigarh"
        }
    })
}


main()