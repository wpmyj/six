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
	public partial class REPAIR_OVERRUN
	{
		public REPAIR_OVERRUN ToPOCO(bool isPOCO = true){
			return new REPAIR_OVERRUN(){
				PKID = this.PKID,
				RAIL_TYPE = this.RAIL_TYPE,
				LINE_TYPE = this.LINE_TYPE,
				RAIL_SLEEPER = this.RAIL_SLEEPER,
				RAIL_BALLAST = this.RAIL_BALLAST,
				REPAIR_LARGE = this.REPAIR_LARGE,
				REPAIR_MIDSIZE_MAX = this.REPAIR_MIDSIZE_MAX,
				REPAIR_MIDSIZE_MIN = this.REPAIR_MIDSIZE_MIN,
				REPAIR_SMALLSIZE_MAX = this.REPAIR_SMALLSIZE_MAX,
				REPAIR_SMALLSIZE_MIN = this.REPAIR_SMALLSIZE_MIN,
				REPAIR_CLEANING = this.REPAIR_CLEANING,
				REPLACE_TURNOUT = this.REPLACE_TURNOUT,
				LINE_TAMPING = this.LINE_TAMPING,
				TURNOUT_TAMPING = this.TURNOUT_TAMPING,
				TURNOUT_BALLAST = this.TURNOUT_BALLAST,
				BRIDGE_BALLAST = this.BRIDGE_BALLAST,
				RAIL_POLISH = this.RAIL_POLISH,
			};
		}
	} 
}
