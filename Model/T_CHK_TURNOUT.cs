//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_CHK_TURNOUT
    {
        public T_CHK_TURNOUT()
        {
            this.T_CHK_TURNOUT_DIAMOND_ITEMS = new HashSet<T_CHK_TURNOUT_DIAMOND_ITEMS>();
            this.T_CHK_TURNOUT_DOUBLE_ITEMS = new HashSet<T_CHK_TURNOUT_DOUBLE_ITEMS>();
            this.T_CHK_TURNOUT_MOVPOINT_ITEMS = new HashSet<T_CHK_TURNOUT_MOVPOINT_ITEMS>();
            this.T_CHK_TURNOUT_SLIP_ITEMS = new HashSet<T_CHK_TURNOUT_SLIP_ITEMS>();
            this.T_CHK_TURNOUT_ITEMS = new HashSet<T_CHK_TURNOUT_ITEMS>();
        }
    
        public string PKID { get; set; }
        public string LINE_DIR { get; set; }
        public string STATION_NAME { get; set; }
        public string TURNOUT_CODE { get; set; }
        public string TURNOUT_NO { get; set; }
        public string TURNOUT_TYPE { get; set; }
        public string DIR_TYPE { get; set; }
        public string MER_TYPE { get; set; }
        public string SPEED_RANGE { get; set; }
        public string TURNOUTYPE_FLAG { get; set; }
        public string PHONE_NO { get; set; }
        public string CHK_NAME { get; set; }
        public Nullable<System.DateTime> CHK_TM { get; set; }
        public Nullable<System.DateTime> CRT_TM { get; set; }
        public string CRT_NAME { get; set; }
        public Nullable<System.DateTime> UPD_TM { get; set; }
        public string UPD_NAME { get; set; }
        public Nullable<decimal> SHOW_ORDER { get; set; }
        public string LINE_TYPE { get; set; }
        public string CHECK_POS { get; set; }
    
        public virtual ICollection<T_CHK_TURNOUT_DIAMOND_ITEMS> T_CHK_TURNOUT_DIAMOND_ITEMS { get; set; }
        public virtual ICollection<T_CHK_TURNOUT_DOUBLE_ITEMS> T_CHK_TURNOUT_DOUBLE_ITEMS { get; set; }
        public virtual ICollection<T_CHK_TURNOUT_MOVPOINT_ITEMS> T_CHK_TURNOUT_MOVPOINT_ITEMS { get; set; }
        public virtual ICollection<T_CHK_TURNOUT_SLIP_ITEMS> T_CHK_TURNOUT_SLIP_ITEMS { get; set; }
        public virtual ICollection<T_CHK_TURNOUT_ITEMS> T_CHK_TURNOUT_ITEMS { get; set; }
    }
}
