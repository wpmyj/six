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
	public partial class SCRIPTS_SPECIAL_FLAG
	{
		public SCRIPTS_SPECIAL_FLAG ToPOCO(bool isPOCO = true){
			return new SCRIPTS_SPECIAL_FLAG(){
				SPECIAL_ID = this.SPECIAL_ID,
				MARS_LONGITUDE = this.MARS_LONGITUDE,
				MARS_LATITUDE = this.MARS_LATITUDE,
				SPECIAL_TYPE = this.SPECIAL_TYPE,
				SPECIAL_NAME = this.SPECIAL_NAME,
				SPECIAL_NOTE = this.SPECIAL_NOTE,
				ICON = this.ICON,
				CJNAME = this.CJNAME,
				GQNAME = this.GQNAME,
				UPDATETIME = this.UPDATETIME,
				DEPT_CODE = this.DEPT_CODE,
			};
		}
	} 
}