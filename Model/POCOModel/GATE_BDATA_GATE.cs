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
	public partial class GATE_BDATA_GATE
	{
		public GATE_BDATA_GATE ToPOCO(bool isPOCO = true){
			return new GATE_BDATA_GATE(){
				GATE_NO = this.GATE_NO,
				GATE_NAME = this.GATE_NAME,
				LONGITUDE = this.LONGITUDE,
				LATITUDE = this.LATITUDE,
				MARSLONGITUDE = this.MARSLONGITUDE,
				MARSLATITUDE = this.MARSLATITUDE,
				BAIDULONGITUDE = this.BAIDULONGITUDE,
				BAIDULATITUDE = this.BAIDULATITUDE,
				DEPT_CODE = this.DEPT_CODE,
				CLIENT_NO = this.CLIENT_NO,
				LINE_CODE = this.LINE_CODE,
				LINE_NAME = this.LINE_NAME,
				LINE_DIR = this.LINE_DIR,
				MILEAGE_COORDINATE = this.MILEAGE_COORDINATE,
				GATE_CONVERTNO = this.GATE_CONVERTNO,
				GATE_TYPE = this.GATE_TYPE,
				GATE_ID = this.GATE_ID,
			};
		}
	} 
}
