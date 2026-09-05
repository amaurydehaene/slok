const Realm = require("realm");

async function run() {
  const realm = await Realm.open({ path: "/Users/amaury/default-7.v20.backup.realm" });
  console.log("Schema classes:", realm.schema.map(s => s.name));
  realm.close();
}

run().catch(console.error);
