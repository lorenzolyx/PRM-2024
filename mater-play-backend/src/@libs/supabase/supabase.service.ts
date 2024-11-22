import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { error } from "console";

@Injectable()
export class SupabaseService{

    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase: SupabaseClient
    ){}

    async upload(movieId: string, file: any): Promise<any>{}
        const { originalname, buffer } = file;


        const extensao = originalname.substring(
            originalname).length,
        );

        const {  } = await this.supabase
            .from('mater-play')
            .upload('movies/${movieId}${extensao}', buffer, {
                upsert: true,}
    
        });

        if (error)
            

}