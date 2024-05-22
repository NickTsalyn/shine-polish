export default async function POST(req: Request) {
    try {
        const {username, email, password} = await req.json()
    } catch (error) {
        console.log({error})
    }
}