/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";

const RandomPromoSuggestion = ({ promoCodes }) => {
  const [randomPromo, setRandomPromo] = useState("");

  useEffect(() => {
    // safe check
    if (!promoCodes || Object.keys(promoCodes).length === 0) return;

    const keys = Object.keys(promoCodes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setRandomPromo(randomKey);
  }, [promoCodes]);

  if (!promoCodes || Object.keys(promoCodes).length === 0) return null;

  return (
    <p>
      <span className="promo-code">promo code:</span> {randomPromo}
    </p>
  );
};

export default RandomPromoSuggestion;
