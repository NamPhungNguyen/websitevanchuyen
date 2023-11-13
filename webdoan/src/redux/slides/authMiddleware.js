import jwt from 'jsonwebtoken';

const checkTokenExpiration = (token) => {
    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Thay thế 'your-secret-key' bằng key bí mật của bạn
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (decoded.exp < currentTimestamp) {
            // Token đã hết hạn
            return false;
        }

        // Token hợp lệ
        return true;
    } catch (error) {
        // Lỗi khi giải mã token, có thể do token không hợp lệ
        return false;
    }
};

export { checkTokenExpiration };
