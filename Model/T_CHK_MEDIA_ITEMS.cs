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
    
    public partial class T_CHK_MEDIA_ITEMS
    {
        public string PKID { get; set; }
        public string CHECK_TYPE { get; set; }
        public string FKID { get; set; }
        public string ITEM_FKID { get; set; }
        public string VISUAL_PKID { get; set; }
        public string FILE_PATH { get; set; }
        public string FILE_DESC { get; set; }
        public string THUMBNAIL_PATH { get; set; }
        public Nullable<int> TYPE { get; set; }
        public Nullable<decimal> LNG { get; set; }
        public Nullable<decimal> LAT { get; set; }
        public Nullable<decimal> MARS_LNG { get; set; }
        public Nullable<decimal> MARS_LAT { get; set; }
        public Nullable<decimal> BAIDU_LNG { get; set; }
        public Nullable<decimal> BAIDU_LAT { get; set; }
        public Nullable<System.DateTime> GPS_TM { get; set; }
        public Nullable<System.DateTime> CHK_TM { get; set; }
        public string PHONE_NO { get; set; }
        public string POS_CODE { get; set; }
    }
}
