import crypto from "crypto";

const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "UASHDUASHDUASDHASUDHASUDHA",
    tipo : "hex"
};

export function criptografar(senha: string, key: string) {
	const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, key);
	cipher.update(senha);
	return cipher.final(DADOS_CRIPTOGRAFAR.tipo as BufferEncoding);
};

export function descriptografar(senha: string, key: string) {
	const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, key);
	decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo as BufferEncoding);
	return decipher.final();
};