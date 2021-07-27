// MatchAll method is useful when it comes to finding all the matches and their positions by applying the regular expression to a string. On the other hand, the match method returns only the items that were matched.

const regex = /\b(iPhone)+\b/g;
const smartphones = "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";

for (const match of smartphones.match(regex)) {
  console.log(match); 
}

// matchAll in contrast, returns additional information, such as the index of the string found.

const regex = /\b(iPhone)+\b/g;
const smartphones = "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";
for (const match of smartphones.matchAll(regex)) {
  console.log(match);
}