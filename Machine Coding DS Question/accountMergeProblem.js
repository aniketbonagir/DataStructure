// Accounts Merge Problem - leetcode

function myFunction() {
    
    console.log(accountsMerge(
        [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
      ));

}

var accountsMerge = function(accounts) {
    let dsu = new DSU();
    let email_to_name = {};
    let email_to_id = {};
    let i = 0;
    
    for(let ac of accounts) {
        let name = ac[0];
        let emails = ac.slice(1);
        for(let em of emails) {
            email_to_name[em] = name;
            if(!(em in email_to_id)) {
              email_to_id[em] = i;
              i++;
            }            
            dsu.union(email_to_id[emails[0]], email_to_id[em]);
        }
    }
    let ans = {};
    let final = [];
    for(let email in email_to_name) {
      let index = dsu.find(email_to_id[email])
      if(index in ans) {
        ans[index].push(email);
      } else {
        ans[index] = [email];
      }      
    }
    
    for(let sub of Object.values(ans)) {
        sub.sort();
        final.push([email_to_name[sub[0]]].concat(sub))
    }
    return final;
};

function DSU() {
    this.parent = new Array(10001).fill(0).map((x, i) => i);
    this.find = function(x) {
        if(this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    this.union = function(x, y) {
        this.parent[this.find(x)] = this.find(y);
    }
}