import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';

export class OtpService {
  generateSecret(email: string) {
    return speakeasy.generateSecret({
      name: `MyApp (${email})`,
    });
  }

  generateQRCode(secret: speakeasy.Secret) {
    return new Promise((resolve, reject) => {
      qrcode.toDataURL(secret.otpauth_url, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

  verifyToken(secret: string, token: string) {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
    });
  }
}
