import crypto from 'crypto'

function generateSecretKey() {
    return crypto.randomBytes(64).toString('hex');
}

export const JWT_SECRET = generateSecretKey()