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
	public partial class HRAIL_DEPT_STATION
	{
		public HRAIL_DEPT_STATION ToPOCO(bool isPOCO = true){
			return new HRAIL_DEPT_STATION(){
				DEPTSTATION_ID = this.DEPTSTATION_ID,
				DEPT_CODE = this.DEPT_CODE,
				STATION_CODE = this.STATION_CODE,
				FLAG = this.FLAG,
			};
		}
	} 
}