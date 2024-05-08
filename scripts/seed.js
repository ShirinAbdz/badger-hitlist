const { PrismaClient } = require('@prisma/client');

const {
    newRecords,
    newUsers,
    newProfiles,
} = require('../app/lib/placeholder-data.js');

const bcrypt = require('bcrypt');

async function seedRecords(prisma){
    try{
        await prisma.record.createMany({
            data: newRecords,
        });
        console.log("put in some new records!", );
    } catch (err){
        console.log("uh oh, record issue", err);
        throw error;
    }
}

async function seedUsers(prisma){
    console.log("seeding users");
    try{ 
        const insertedUsers = await Promise.all(
            newUsers.map(async (user) => {
                const hashedPw = await bcrypt.hash(user.password, 10);
                return prisma.user.create({
                    data: {
                        name: user.name,
                        email: user.email,
                        password: hashedPw,
                    },
                });
            }),
        );
        console.log("put in some new users! Response", insertedUsers );
    } catch (err){
        console.log("uh oh, user issue", err);
        throw error;
    }
}

async function seedProfiles(prisma){
    try{
        await prisma.profile.createMany({
            data: newProfiles,
        });
        console.log("put in some new profiles!", );
    } catch (err){
        console.log("uh oh, profiles issue", err);
        throw error;
    }
} 

const prisma = new PrismaClient();

async function main() {
    console.log("seeding data");
    // await seedUsers(prisma);
    // await seedProfiles(prisma);
    await seedRecords(prisma);
}

main().then(async() => {
    await prisma.$disconnect()
}).catch(async (e) =>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
});