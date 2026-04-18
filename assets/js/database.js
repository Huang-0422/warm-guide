// ============================================
// Supabase 数据库配置
// ============================================

// ⚠️ 请替换为您自己的 Supabase 信息
const SUPABASE_URL = 'https://ddurkjatbkykogkurcyu.supabase.co';  // 替换这里
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdXJramF0Ymt5a29na3VyY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzEwNDksImV4cCI6MjA5MTkwNzA0OX0.pDFHzoRzoTyP3fcQIMwZuVpriSxjMPWNAbhYuImUnDs';                    // 替换这里

// 初始化 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 当前用户标识（实际应用应该用手机号或登录系统）
let currentUser = 'demo_user_001';

// ============================================
// 就诊记录相关操作
// ============================================

// 保存就诊记录到云端
async function saveVisitToCloud(dept, date, doctor, diagnosis) {
    const { data, error } = await supabase
        .from('visits')
        .insert([
            { 
                user_phone: currentUser,
                dept: dept,
                visit_date: date,
                doctor: doctor,
                diagnosis: diagnosis
            }
        ])
        .select();
    
    if (error) {
        console.error('保存失败:', error);
        return null;
    }
    return data;
}

// 从云端获取就诊记录
async function getVisitsFromCloud() {
    const { data, error } = await supabase
        .from('visits')
        .select('*')
        .eq('user_phone', currentUser)
        .order('visit_date', { ascending: false });
    
    if (error) {
        console.error('获取失败:', error);
        return [];
    }
    return data;
}

// 删除就诊记录
async function deleteVisitFromCloud(id) {
    const { error } = await supabase
        .from('visits')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('删除失败:', error);
        return false;
    }
    return true;
}

// ============================================
// 用药提醒相关操作
// ============================================

// 保存用药提醒到云端
async function saveReminderToCloud(name, time, dose) {
    const { data, error } = await supabase
        .from('reminders')
        .insert([
            {
                user_phone: currentUser,
                medicine_name: name,
                reminder_time: time,
                dose: dose,
                active: true
            }
        ])
        .select();
    
    if (error) {
        console.error('保存失败:', error);
        return null;
    }
    return data;
}

// 从云端获取用药提醒
async function getRemindersFromCloud() {
    const { data, error } = await supabase
        .from('reminders')
        .select('*')
        .eq('user_phone', currentUser)
        .eq('active', true)
        .order('reminder_time', { ascending: true });
    
    if (error) {
        console.error('获取失败:', error);
        return [];
    }
    return data;
}

// 删除用药提醒
async function deleteReminderFromCloud(id) {
    const { error } = await supabase
        .from('reminders')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('删除失败:', error);
        return false;
    }
    return true;
}

// ============================================
// 紧急联系人相关操作
// ============================================

// 保存紧急联系人到云端
async function saveContactToCloud(name, relation, phone, isPrimary) {
    const { data, error } = await supabase
        .from('emergency_contacts')
        .insert([
            {
                user_phone: currentUser,
                name: name,
                relation: relation,
                phone: phone,
                is_primary: isPrimary
            }
        ])
        .select();
    
    if (error) {
        console.error('保存失败:', error);
        return null;
    }
    return data;
}

// 从云端获取紧急联系人
async function getContactsFromCloud() {
    const { data, error } = await supabase
        .from('emergency_contacts')
        .select('*')
        .eq('user_phone', currentUser)
        .order('is_primary', { ascending: false });
    
    if (error) {
        console.error('获取失败:', error);
        return [];
    }
    return data;
}

// 删除紧急联系人
async function deleteContactFromCloud(id) {
    const { error } = await supabase
        .from('emergency_contacts')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('删除失败:', error);
        return false;
    }
    return true;
}

// 设置首选联系人
async function setPrimaryContactInCloud(id) {
    // 先取消所有首选
    await supabase
        .from('emergency_contacts')
        .update({ is_primary: false })
        .eq('user_phone', currentUser);
    
    // 设置新的首选
    const { error } = await supabase
        .from('emergency_contacts')
        .update({ is_primary: true })
        .eq('id', id);
    
    return !error;
}

console.log('✅ 数据库连接已初始化');