import { useState, useEffect } from "react";
import { reaction } from "mobx";

export function useObservable(cb,deps = []) {
    const [val, setState] = useState(cb);
    useEffect(() => {
      setState(cb());  
      return reaction(cb, v => setState(v));
    },deps);
    return val;
  }