export default function createCounter() {
    let counter = 0;
    return () => {
        counter += 1;
        return counter;
    }
}