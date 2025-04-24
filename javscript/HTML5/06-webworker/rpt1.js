onmessage = e => {
    const rcv = e.data;
    const res = `${rcv} => 홍박사님을 그만 알고 싶어요`;
    postMessage(res);
}