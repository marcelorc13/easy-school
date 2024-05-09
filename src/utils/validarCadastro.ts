import { z } from "zod";

export const CadastroSchema = z.object({
    nome: z.string()
        .min(3, "O campo deve conter no minimo 3 caracteres")
        .max(20, "O campo deve conter no máximo 20 caracteres"),
    sobrenome: z.string()
        .min(3, "O campo deve conter no minimo 3 caracteres")
        .max(20, "O campo deve conter no máximo 20 caracteres"),
    curso: z.string()
        .min(3, "O campo deve conter no minimo 3 caracteres")
        .max(50, "O campo deve conter no máximo 50 caracteres"),
    instituicao: z.string()
        .min(3, "O campo deve conter no minimo 3 caracteres")
        .max(20, "O campo deve conter no máximo 20 caracteres"),
    email: z
        .string()
        .email("Insira uma forma válida de Email")
        .trim(),
    senha: z
        .string()
        .min(8, "A senha deve conter no minimo 8 caracteres")
        .max(16, "A senha deve conter no maximo 16 caracteres")
        .regex(/[0-9]/, "A senha necessita conter pelo menos 1 número")
        .regex(/[a-zA-Z]/, "A senha necessita conter pelo menos 1 letra")
        .trim()
})

export type UserType = z.infer<typeof CadastroSchema>