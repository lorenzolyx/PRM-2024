import { createClient } from '@supabase/supabase-js';
import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";

const supabaseProvider = {
    provide: 'SUPABASE_CLIENT',
    useFactory: () => new {
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY),
    },
};

@Module({
    providers: [supabaseProvider, SupabaseService],
    exports: [SupabaseService],
})
export class SupabaseModule {};