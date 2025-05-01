import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { doLogout } from "@/app/actions";

const DashboardPage = async () => {
  const session = await auth();
  if(!session?.user) redirect("/login");
  return (
    <div className='flex flex-col items-center m-4'>
      {
        session?.user?.image && session?.user?.name ? (<>
          <h1 className='text-3xl my-2'>{session?.user?.name}</h1>
          <Image 
            src={session?.user?.image}
            alt={session?.user?.name}
            width={72}
            height={72}
            className='rounded-full'
          /></>
        ): (<h1 className='text-3xl my-2'>{session?.user?.name}</h1>)
      }
      

      <form action={doLogout}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  )
}

export default DashboardPage