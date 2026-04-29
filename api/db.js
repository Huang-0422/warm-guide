// api/db.js
// 引入supabase官方js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

// 读取配置
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ===================== 通用查询 =====================
// 查询整张表所有数据
async function getAllData(tableName) {
  let { data, error } = await supabase
    .from(tableName)
    .select('*');
  if(error) console.error("查询失败：",error);
  return data;
}

// 按条件查询
async function getWhereData(tableName, key, value) {
  let { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq(key, value);
  if(error) console.error("条件查询失败：",error);
  return data;
}

// ===================== 新增数据 =====================
async function addData(tableName, obj) {
  let { data, error } = await supabase
    .from(tableName)
    .insert([obj]);
  if(error) console.error("新增失败：",error);
  return data;
}

// ===================== 修改数据 =====================
async function updateData(tableName, key, value, upObj) {
  let { data, error } = await supabase
    .from(tableName)
    .update(upObj)
    .eq(key, value);
  if(error) console.error("修改失败：",error);
  return data;
}

// ===================== 删除数据 =====================
async function delData(tableName, key, value) {
  let { data, error } = await supabase
    .from(tableName)
    .delete()
    .eq(key, value);
  if(error) console.error("删除失败：",error);
  return data;
}

// 全部导出，页面可以直接调用
export {
  supabase,
  getAllData,
  getWhereData,
  addData,
  updateData,
  delData
};