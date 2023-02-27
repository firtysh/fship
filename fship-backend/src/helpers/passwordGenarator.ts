export default function (len:Number): String {
    const password: String = Math.random().toString(36).slice(-len);
    return password;
}