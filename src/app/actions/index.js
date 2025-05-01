'use server';
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(){
    await signIn('google', { redirectTo: "/dashboard"});
}

export async function doCredentialLogin(formData) {
    try{
        const response = await signIn('credentials',
            {
                email: formData.get('email'),
                password: formData.get('password'),
                redirect: false,
            }
        );

        return response;
    }catch(err){
        throw new Error(err);
    }
}

export async function doLogout(){
    await signOut({redirectTo: "/"});
}