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
	public partial class RAIL_CARRIERDEVICE_STATUS
	{
		public RAIL_CARRIERDEVICE_STATUS ToPOCO(bool isPOCO = true){
			return new RAIL_CARRIERDEVICE_STATUS(){
				PKID = this.PKID,
				POINT_NO = this.POINT_NO,
				POINT_STATUS = this.POINT_STATUS,
				IS_SHOW = this.IS_SHOW,
				RECORD_TIME = this.RECORD_TIME,
			};
		}
	} 
}
