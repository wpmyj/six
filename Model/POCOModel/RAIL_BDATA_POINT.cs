//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class RAIL_BDATA_POINT
	{
		public RAIL_BDATA_POINT ToPOCO(bool isPOCO = true){
			return new RAIL_BDATA_POINT(){
				POINT_NO = this.POINT_NO,
				POINT_NAME = this.POINT_NAME,
				LINE_CODE = this.LINE_CODE,
				LINE_NAME = this.LINE_NAME,
				LINE_DIR = this.LINE_DIR,
				MILEAGE_COORDINATE = this.MILEAGE_COORDINATE,
				NORMAL_FLAG = this.NORMAL_FLAG,
				HOST_NO = this.HOST_NO,
				POINT_ORDER = this.POINT_ORDER,
				SEND_TIME = this.SEND_TIME,
				LONGITUDE = this.LONGITUDE,
				LATITUDE = this.LATITUDE,
				MARSLONGITUDE = this.MARSLONGITUDE,
				MARSLATITUDE = this.MARSLATITUDE,
				BAIDULONGITUDE = this.BAIDULONGITUDE,
				BAIDULATITUDE = this.BAIDULATITUDE,
				POINT_NOTE = this.POINT_NOTE,
			};
		}
	} 
}