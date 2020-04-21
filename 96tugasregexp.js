callRegExp = () => {
  let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
  let a = str.match(/[cC]/g)
  let b = str.match(/[kK]/g)
  let c = str.match(/[lL]/g)

  console.log(a)
  console.log(b)
  console.log(c)
}
callRegExp()
