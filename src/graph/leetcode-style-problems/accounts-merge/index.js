function accountsMerge(accounts) {
  const visited = new Set();
  const adjacency = new Map();

  function dfs(mergedAccount, email) {
    visited.add(email);
    mergedAccount.push(email);

    if (!adjacency.has(email)) return;

    for (const n of adjacency.get(email)) {
      if (!visited.has(n)) {
        dfs(mergedAccount, n);
      }
    }
  }

  for (const account of accounts) {
    const accountFirstEmail = account[1];

    for (let i = 2; i < account.length; i++) {
      const accountEmail = account[i];

      if (!adjacency.has(accountFirstEmail)) {
        adjacency.set(accountFirstEmail, []);
      }

      adjacency.get(accountFirstEmail).push(accountEmail);

      if (!adjacency.has(accountEmail)) {
        adjacency.set(accountEmail, []);
      }

      adjacency.get(accountEmail).push(accountFirstEmail);
    }
  }

  const mergedAccounts = [];

  for (const account of accounts) {
    const accountName = account[0];
    const accountFirstEmail = account[1];

    if (!visited.has(accountFirstEmail)) {
      const mergedAccount = [accountName];
      dfs(mergedAccount, accountFirstEmail);

      const name = mergedAccount[0];
      const emails = mergedAccount.slice(1).sort();
      mergedAccounts.push([name, ...emails]);
    }
  }

  return mergedAccounts;
}
