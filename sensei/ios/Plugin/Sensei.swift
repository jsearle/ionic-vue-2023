import Foundation

@objc public class Sensei: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
