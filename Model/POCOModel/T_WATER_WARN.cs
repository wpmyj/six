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
	public partial class T_WATER_WARN
	{
		public T_WATER_WARN ToPOCO(bool isPOCO = true){
			return new T_WATER_WARN(){
				PKID = this.PKID,
				设备手机号 = this.设备手机号,
				设备编号 = this.设备编号,
				时间 = this.时间,
				报警级别 = this.报警级别,
				报警水位 = this.报警水位,
			};
		}
	} 
}