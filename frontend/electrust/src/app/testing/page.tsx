"use client";
import React from "react";
import { MeshBadge } from "@meshsdk/react";
import { useState } from "react";
import { useWallet, CardanoWallet } from "@meshsdk/react";

export default function Page() {
    const { connected, wallet } = useWallet();    
    const [assets, setAssets] = useState<null | any>(null);
    const [loading, setLoading] = useState(false);

    async function getAssets() {
        if (wallet) {
            setLoading(true);
            const assets = await wallet.getAssets();
            setAssets(assets);
            setLoading(false);
        }
    }

  return (
    <div>
        <h1>Cardano Wallet</h1>
        <MeshBadge />
        <button onClick={getAssets} disabled={loading}>
            {loading ? "Loading..." : "Get Assets"}
        </button>
        {connected && (
            <>
                <h1>Get Wallet Assets</h1>
                {assets && <pre>{JSON.stringify(assets, null, 2)}</pre>}

            </>
        )
        }
    </div>
  );
}